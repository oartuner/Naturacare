import urllib.request
import re
import ssl
import time

def get_real_product_images():
    base_url = "https://www.naturacare.com.tr"
    shop_url = "https://www.naturacare.com.tr/urunler/"
    
    context = ssl._create_unverified_context()
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    }
    
    print(f"Scanning {shop_url} for products...")
    
    try:
        # 1. Get Shop Page
        req = urllib.request.Request(shop_url, headers=headers)
        with urllib.request.urlopen(req, context=context) as response:
            html = response.read().decode('utf-8')
            
        # 2. Extract Product URLs
        # Pattern for product links: href="https://www.naturacare.com.tr/product/slug/"
        product_link_pattern = r'href="(https://www.naturacare.com.tr/product/[^"/]+/?)"'
        product_links = sorted(list(set(re.findall(product_link_pattern, html))))
        
        print(f"Found {len(product_links)} product links. Fetching details...")
        
        results = []
        
        # 3. Visit each product and get og:image
        for link in product_links:
            try:
                # Be nice to the server
                time.sleep(0.5)
                
                req = urllib.request.Request(link, headers=headers)
                with urllib.request.urlopen(req, context=context) as p_response:
                    p_html = p_response.read().decode('utf-8')
                    
                # Get Image
                img_match = re.search(r'meta property="og:image" content="([^"]+)"', p_html)
                # Get Title
                title_match = re.search(r'meta property="og:title" content="([^"]+)"', p_html)
                
                if img_match and title_match:
                    img_url = img_match.group(1)
                    title = title_match.group(1).replace(" - Naturacare", "").strip()
                    
                    # Store tuple
                    results.append((title, img_url, link))
                    print(f"[FOUND] {title}: {img_url}")
                else:
                    print(f"[MISSING] Could not find og:image for {link}")
                    
            except Exception as e:
                print(f"[ERROR] Failed to fetch {link}: {e}")
                
        # 4. Print Summary for Tool
        print("\n--- FINAL MAPPING ---")
        for r in results:
            print(f"PRODUCT: {r[0]} | IMAGE: {r[1]}")
            
    except Exception as e:
        print(f"Critical Error: {e}")

if __name__ == "__main__":
    get_real_product_images()
