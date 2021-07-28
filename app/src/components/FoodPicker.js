import React, { useEffect }  from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getFood } from '../actions';

const FoodPicker = (props) => {
    const { image, isFetching, error } = props;
    useEffect(() => {
        props.getFood()
    }, [])

    if (error) {
        return <h2>FETCHING ERROR: {error} </h2>;
    }

    if (isFetching) {
        return <h2>FETCHING! PLEASE WAIT A MOMENT.</h2>
    }

    const handleClick = () => {
        props.getFood()
    }

    return (
        <>
            <div>
                <h2> Here is your next meal! </h2>
                <img src={image}/>
            </div>
            <button onClick={handleClick}>Not feeling it? Press again!</button>
        </>
    );
};

const mapStatetoProps = state => {
    console.log(state);
    return {
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStatetoProps, {getFood})(FoodPicker);