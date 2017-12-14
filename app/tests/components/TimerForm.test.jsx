var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TimerForm = require('TimerForm');

describe('TimerForm', ()=>{
   it('should exist', ()=>{
       expect(TimerForm).toExist();
   });

   it('should call onSetTimer if valid seconds entered',()=>{
       var spy = expect.createSpy();
       var countdownform = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy}/>);
       var $el = $(ReactDOM.findDOMNode(countdownform));

       countdownform.refs.seconds.value = '109';
       TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toHaveBeenCalledWith(109);
   });

    it('should have not been called if invalid seconds entered',()=>{
        var spy = expect.createSpy();
        var countdownform = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownform));

        countdownform.refs.seconds.value = 'aaa';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});