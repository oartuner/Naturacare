import urllib.request
import re
import ssl
import json
import time

def scrape_product_details():
    with open("valid_product_urls.json", "r") as f:
        urls = json.load(f)
        
    # Filter for a few diverse examples to be safe
    # e.g., Mist (Cosmetic), 2026 (Set), Bakir Dil (Accessory)
    target_urls = [u for u in urls if "mist" in u or "2026" in u or "bakir" in u or "kese" in u]
    if not target_urls: target_urls = urls[:3]
    
    context = ssl._create_unverified_context()
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    }
    
    results = {}
    
    for url in target_urls:
        print(f"Scraping {url}...")
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, context=context) as response:
                html = response.read().decode('utf-8')
            
            # 1. Short Description (Usually near the top)
            short_desc = ""
            short_desc_match = re.search(r'<div class="woocommerce-product-details__short-description">(.*?)</div>', html, re.DOTALL)
            if short_desc_match:
                short_desc = re.sub(r'<[^>]+>', '', short_desc_match.group(1)).strip()
                
            # 2. Main Description (Tab 1)
            # WooCommerce tabs usually have current IDs
            # Looking for content under "tab-description" or similar
            long_desc = ""
            long_desc_match = re.search(r'id="tab-description"(.*?)id="tab-', html, re.DOTALL) # Attempt to grab until next tab
            if not long_desc_match:
                 long_desc_match = re.search(r'id="tab-description"(.*?)<div class="related products">', html, re.DOTALL)

            if long_desc_match:
                raw_long = long_desc_match.group(1)
                long_desc = re.sub(r'<[^>]+>', ' ', raw_long)
                long_desc = " ".join(long_desc.split())
            
            # 3. Ingredients / Additional Info
            # Sometimes in "Additional Information" tab or just part of description
            # Let's save the raw text of the description tab to analyze structure manually if needed
            
            results[url] = {
                "short_description": short_desc,
                "long_description_preview": long_desc[:500],
                "full_html_length": len(html)
            }
            
            time.sleep(1) # Be nice
            
        except Exception as e:
            print(f"Error scraping {url}: {e}")
            
    with open("scraped_details_sample.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=4, ensure_ascii=False)
        
    print("Scraping complete. Check scraped_details_sample.json")

if __name__ == "__main__":
    scrape_product_details()
