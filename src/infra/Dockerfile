FROM node:22.16.0-slim

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN chmod +x src/infra/start.sh

USER node

EXPOSE 3000

CMD ["src/infra/start.sh"]
