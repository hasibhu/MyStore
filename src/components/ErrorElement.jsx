
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <div >
            <h4 className='text-4xl font-bold text-center'> There was an error ......</h4>
        </div>
    );
};

export default ErrorElement;