import { useDispatch, useSelector } from "react-redux";

// Action Creator
import { changeName, changeCost, addCar } from '../store';

function CarForm() {

    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    });

    const handelNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({
            name,
            cost
        }));
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit} >
                <div className="field-group">
                    <div className="field">
                        <label className="label">
                            Name
                        </label>
                        <input value={name} onChange={handelNameChange} type="text" className="input is-expanded" />
                    </div>
                    <div className="field">
                        <label className="label">
                            cost
                        </label>
                        <input value={cost || ''} onChange={handleCostChange} type="number" className="input is-expanded" />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
}

export default CarForm;