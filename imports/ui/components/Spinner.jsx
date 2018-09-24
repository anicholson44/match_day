import React from 'react';
import CancelablePromise, { PromiseCanceledError } from '../../services/CancelablePromise';

class Spinner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { numberOfPeriods: 0 };
    this.scheduleTextUpdate = this.scheduleTextUpdate.bind(this);
  }

  componentWillUnmount() {
    this._scheduleTextUpdatePromise.cancel();
  }

  scheduleTextUpdate() {
    this._scheduleTextUpdatePromise = new CancelablePromise((resolve) =>
      setTimeout(() => resolve(), 500));
    this._scheduleTextUpdatePromise.then(() => {
      const numberOfPeriods = this.props.active ? (this.state.numberOfPeriods + 1) % 4 : 0;
      this.setState({ numberOfPeriods });
    }).catch((e) => {
      if (e instanceof PromiseCanceledError) {
        // do nothing if promise is canceled
      } else {
        throw e;
      }
    });
  }

  render() {
    const { active } = this.props;
    const { numberOfPeriods } = this.state;
    const text = `Loading${Array(numberOfPeriods).fill('.').join('')}`;
    this.scheduleTextUpdate();
    return active ? (
      <div className='spinner-container'>
        <div className='spinner' />
        <div className='text'>
          {text}
        </div>
      </div>
    ) : null;
  }
}

export default Spinner;
