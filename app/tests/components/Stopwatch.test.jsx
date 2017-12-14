var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Stopwatch = require('Stopwatch');


describe('Stopwatch', ()=>{
   it('should exist', ()=>{
       expect(Stopwatch).toExist();
   });

   describe('handleSetCountdown', ()=>{
      it('should set state to started and countdown',()=>{
          var countdown = TestUtils.renderIntoDocument(<Stopwatch/>);
          countdown.handleSetTimer(10);

          expect(countdown.state.count).toBe(10);
          expect(countdown.state.countdownStatus).toBe('started');
      });
   });
});