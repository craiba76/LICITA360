import logging

# Configurações de logging
logging.basicConfig(filename='output_log.txt', level=logging.INFO, format='%(asctime)s - %(message)s')

# Exemplo de uso do log
logging.info("O script iniciou")
# Seu código aqui
logging.info("O script terminou")
