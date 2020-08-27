FROM nikolaik/python-nodejs:latest

RUN git clone https://github.com/blockchain-certificates/cert-tools.git
RUN cd cert-tools && pip install .
COPY cert-tools/server/ .
RUN npm install
CMD ["node", "main.js"]