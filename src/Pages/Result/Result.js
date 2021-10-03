import { useEffect } from 'react';
import { useHistory } from "react-router";
import './Result.css';
import { Button } from "@material-ui/core";

const Result = ({ name, score }) => {

    const history = useHistory();

    useEffect(() => {
        if (!name) {
            history.push("/quiz");
        }

    }, [name, history]);

    return <div className='result'>
        <span className='titleResult'>YOUR FINAL SCORE : {score}</span>
        <Button
            variant='contained'
            color='secondary'
            size='large'
            style={{ alignSelft: 'center', margin: '0 auto', width: '40%' }}
            href='/quiz'
        
        >
            TAKE ME TO HOMEPAGE
        </Button>
    </div>
}

export default Result