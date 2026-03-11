FROM postgres
COPY db.sql /docker-entrypoint-initdb.d/
ENV POSTGRES_PASSWORD=postgres
