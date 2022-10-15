import requests

async def getImage(prompt):
    r = requests.post(
        "https://api.deepai.org/api/text2img",
        data={
            'text': prompt,
        },
        headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
    )
    return r.json().output_url