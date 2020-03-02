From python:3.6

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		postgresql-client \
	&& rm -rf /var/lib/apt/lists/*

COPY . /app
COPY requirements.txt /app
WORKDIR /app
RUN pip install -r requirements.txt
CMD ["python", "server.py"]
