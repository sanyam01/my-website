import classes from './BasicForm.module.css';

const BasicForm = (props) => {
    return (
      <form>
        <div className= {classes['control-group']}>
          <div className={classes['form-control']}>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' />
           </div>
          <div className={classes['form-control']}>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' />
          </div>
        
        <div className={classes['form-control']}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' />
        </div>
        <div className={classes['form-control']}>
          <label htmlFor='name'>Organisation Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-actions'>
          <button>Submit</button>
        </div>
        </div>
      </form>
    );
  };
  
  export default BasicForm;