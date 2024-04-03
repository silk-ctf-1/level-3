FROM public.ecr.aws/lambda/python:3.12
ENV FLAG=FLAG
ENV SECRET_KEY=SECRET_KEY

# Copy function code
COPY app.py ${LAMBDA_TASK_ROOT}

RUN pip install cryptography

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.handler" ]