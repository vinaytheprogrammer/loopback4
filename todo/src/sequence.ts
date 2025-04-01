import {MiddlewareSequence} from '@loopback/rest';

// this is utilise for custom sequence
// to handle the request and response
// and to add custom logic
// for example, to add custom headers
// or to handle errors
export class MySequence extends MiddlewareSequence {}
