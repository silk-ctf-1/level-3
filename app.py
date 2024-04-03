import os
from cryptography.fernet import Fernet


def handler(e, c):

    flag = os.environ["FLAG"]
    secret = os.environ["SECRET_KEY"]

    fernet = Fernet(secret.encode())

    message = fernet.encrypt(flag.encode())

    return {"message": message.decode()}
