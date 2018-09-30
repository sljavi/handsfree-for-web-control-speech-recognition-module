import module from '../src/index'

function mockExtension(methods = {}) {
  global.chrome = {
    extension: {
      sendMessage: jest.fn(),
      ...methods
    }
  }
}

describe('Module', () => {
  it('defines a module', () => {
    expect(module).toMatchSnapshot()
  })
  describe('startListening action', () => {
    it('calls background action', () => {
      const sendMessage = jest.fn()
      mockExtension({ sendMessage })
      const startListening = module.contexts[0].commands[0]
      expect(startListening.name).toEqual('i18n-command.start-listening')
      startListening.action()
      expect(sendMessage.mock.calls).toMatchSnapshot()
    })
  })
  describe('stopListening action', () => {
    it('calls background action', () => {
      const sendMessage = jest.fn()
      mockExtension({ sendMessage })
      const stopListening = module.contexts[0].commands[1]
      expect(stopListening.name).toEqual('i18n-command.stop-listening')
      stopListening.action()
      expect(sendMessage.mock.calls).toMatchSnapshot()
    })
  })
})
