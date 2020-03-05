'use strict'

const createSubscriber = (subSocket, batchSocket, exit, logger) => {
  const subscriber = async () => {
    for await (const [topic, msg] of subSocket) {
      if (topic.toString() === 'exit') {
        logger.info(`received exit signal, ${msg.toString()}`)
        batchSocket.close()
        subSocket.close()
        exit(0)
      }
    }
  }

  return subscriber
}

module.exports = createSubscriber
