# Deploying a simple django app using Argonaut

Important: It is recommended not to use on-disk DB like Sqlite in lambda apps. Please use alternatives like Postgres.

## Initial setup (Optional)

- Inside you root project directory create `requirements.txt` and specify your Django version
`Django==2.2.5`

- Use `django-admin startproject djangosite` to generate boilerplate code for your project

- Inside `djangosite` directory, remove Sqlite from `DATABASES`. To use Postgres, you can set databases as following:
```python
DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': os.environ.get('DB_NAME', 'dbname'),
    'USER': os.environ.get('DB_USER', 'postgres'),
    'PASSWORD': os.environ.get('DB_PASSWORD'),
    'HOST': os.environ.get('DB_HOST'),
    'PORT': os.environ.get('DB_PORT', 5432),
  }
}
```


## Argonaut Deployment

![image](https://user-images.githubusercontent.com/9110203/163164782-82bb2310-b41f-455f-a167-c4a83ba40d60.png)


