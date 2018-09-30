function executeBackgroundAction(action, cb = () => {}) {
  window.chrome.extension.sendMessage(action, cb)
}

function startListening() {
  executeBackgroundAction({
    startSpeechRecognition: true
  })
}

function stopListening() {
  executeBackgroundAction({
    startSleepMode: true
  })
}

export default {
  name: 'i18n-name',
  description: 'i18n-description',
  icon: 'fa fa-search-plus',
  contexts: [{
    context: 'root',
    commands: [{
      name: 'i18n-command.start-listening',
      help: 'i18n-help.start-listening',
      action: startListening,
      group: 'i18n-group.listeningControl'
    }, {
      name: 'i18n-command.stop-listening',
      help: 'i18n-help.stop-listening',
      action: stopListening,
      group: 'i18n-group.listeningControl'
    }],
    i18n: {
      en: {
        'group.listeningControl': 'Listening Control',
        'command.stop-listening': 'stop listening',
        'help.stop-listening': 'Stop voice recognition process',
        'command.start-listening': 'start listening',
        'help.start-listening': 'Start voice recognition process'
      },
      es: {
        'group.listeningControl': 'Control de reconocimiento de voz',
        'command.stop-listening': 'detener reconocimiento',
        'help.stop-listening': 'Concluye el proceso de reconocimiento de voz',
        'command.start-listening': 'iniciar reconocimiento',
        'help.start-listening': 'Inicia el proceso de reconocimiento de voz'
      }
    }
  }],
  i18n: {
    en: {
      name: 'Speech Recognition Control',
      description: 'Commands useful to tell to Handsfree for web when to listen for voice commands.'
    },
    es: {
      name: 'Control de reconocimiento de voz',
      description: 'Comandos útiles para indicarle a la extensión cuando escuchar comandos de voz.'
    }
  }
}
