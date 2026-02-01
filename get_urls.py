import urllib.request
import re
import ssl
import json

def get_product_links():
    url = "https://www.naturacare.com.tr/urunler/"
    context = ssl._create_unverified_context()
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    }
    
    print(f"Fetching {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=context) as response:
            html = response.read().decode('utf-8')
            
        # Extract product links
        # Looking for hrefs that look like product pages
        # Common patterns: /product/slug/ or /urun/slug/
        links = re.findall(r'href="(https://www.naturacare.com.tr/product/[^"]+)"', html)
        links += re.findall(r'href="(https://www.naturacare.com.tr/urun/[^"]+)"', html)
        
        unique_links = sorted(list(set(links)))
        
        print(f"Found {len(unique_links)} product links:")
        for link in unique_links:
            print(link)
            
        # Save to file for next step
        with open("valid_product_urls.json", "w") as f:
            json.dump(unique_links, f)
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_product_links()
