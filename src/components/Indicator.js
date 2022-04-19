import { useLocation } from 'react-router-dom';

const Indicator = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes('/thankyou') ? (
        <img src="/check.svg" alt="checkmark" className='checkmark' />
      ) : (
        <div className='indicator'>
          <div className='indicator-item flex-column'>
            <span
              className={
                location.pathname.includes('/step1')
                  ? 'number selected'
                  : 'number'
              }
            >
              1
            </span>
            <span className='label'>Genre</span>
          </div>
          <div className='indicator-item flex-column'>
            <span
              className={
                location.pathname.includes('/step2')
                  ? 'number selected'
                  : 'number'
              }
            >
              2
            </span>
            <span className='label'>Subgenre</span>
          </div>

          {location.pathname.includes('/step') && (
            <div className='indicator-item flex-column'>
              <span className='number'>...</span>
            </div>
          )}

          {location.pathname.includes('/add-new') && (
            <>
              <div className='indicator-item flex-column'>
                <span className='number selected'>3</span>
                <span className='label'>Add new subgenre</span>
              </div>
              <div className='indicator-item flex-column'>
                <span className='number'>4</span>
                <span className='label'>Information</span>
              </div>
            </>
          )}

          {location.pathname.includes('/final') && (
            <>
              <div className='indicator-item flex-column'>
                <span className='number'>3</span>
                <span className='label'>Add new subgenre</span>
              </div>
              <div className='indicator-item flex-column'>
                <span className='number selected'>4</span>
                <span className='label'>Information</span>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Indicator;
