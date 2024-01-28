import requests

def test_telegram_bot(token):
    url = f"https://api.telegram.org/bot{token}/getMe"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return f"Error: {response.status_code}"

token = "6052895541:AAFARYXt6_zDpVRKU5a60lna-2-sS1EOV-Y"
result = test_telegram_bot(token)
print(result)
