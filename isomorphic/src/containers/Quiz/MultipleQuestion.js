import React, { Component, Fragment } from 'react';
import { CheckboxGroup } from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';

export default class MultipleQuestion extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      showResult: false,
    };
  }
  onCheckboxChange = (e) => {
    this.setState({ answer: e });
  };
  showResult = (e) => {
    this.setState({ showResult: true });
  };
  answerQuestion = (e) => {
    if (this.state.answer !== '') {
      this.props.setQuestionAnswer(this.state.answer);
    } else {
      alert('Please select an answer');
    }
  };
  nextQuestion = (e) => {
    this.setState({ answer: '' });
    this.props.nextQuestion();
  };
  // The render function, where we actually tell the browser what it should show
  render() {
    const {
      question,
      answers,
      submitted,
      total,
      activeQuestion,
      correct,
      wrong,
    } = this.props;
    return (
      <div>
        {!this.state.showResult ? (
          <Fragment>
            {!question.showAnswer ? (
              <Fragment>
                <CheckboxGroup
                  onChange={this.onCheckboxChange}
                  options={question.options}
                />
                <Button type="primary" onClick={this.answerQuestion}>
                  Submit
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <CheckboxGroup
                  onChange={this.onCheckboxChange}
                  options={question.options}
                  disabled
                />
                {activeQuestion < total - 1 ? (
                  <Button type="primary" onClick={this.nextQuestion}>
                    Next
                  </Button>
                ) : (
                  <Button type="primary" onClick={this.showResult}>
                    Show Result
                  </Button>
                )}
              </Fragment>
            )}

            {submitted && answers ? (
              <Fragment>
                <p>Correct answer!</p>
              </Fragment>
            ) : null}
            {submitted && !answers ? (
              <Fragment>
                <p>Wrong answer! Correct Answer is :{question.answers}</p>
              </Fragment>
            ) : null}
          </Fragment>
        ) : (
          <Fragment>
            <p>Your correct answer: {correct}</p>
            <p>Your wrong answer: {wrong}</p>
          </Fragment>
        )}
      </div>
    );
  }
}
