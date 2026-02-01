import urllib.request
import re
import ssl

def get_images():
    url = "https://www.naturacare.com.tr/urunler/"
    context = ssl._create_unverified_context()
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=context) as response:
            html = response.read().decode('utf-8')
            
        # Find ANY link containing wp-content/uploads
        # This covers src, data-src, srcset, href (lightbox), etc.
        pattern = r'https?://[^"\s\'>]+wp-content/uploads/[^"\s\'>]+'
        matches = re.findall(pattern, html)
        
        # Filter for images
        extensions = ('.jpg', '.jpeg', '.png', '.webp')
        images = [m for m in matches if m.lower().endswith(extensions) or '?' in m]
        
        # Clean up duplicates
        unique_images = sorted(list(set(images)))
        
        print(f"Found {len(unique_images)} images:")
        for img in unique_images:
            print(img)
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_images()
