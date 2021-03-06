// @flow

import RequestRPC from '@mainframe/rpc-request'
import httpTransport from '@mainframe/transport-http-node'

export default (url: string) => new RequestRPC(httpTransport(url))
