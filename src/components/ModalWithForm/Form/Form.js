import React from "react";
import './Form.css';

function Form(){
    return(
        <>
            <label className="form__label text__label">
                Name
                <input type='text' name='name' minLength='1' maxLength='30'  className="text__input" placeholder="Name"/>
            </label>
            <label className="form__label text__label">
                Image
                <input type='url' name='link' minLength='1' maxLength='30' className="text__input" placeholder="Image URL"/>
            </label>
            <div className="form__radio-container">
                <p className="form__subtitle">Select the weather type:</p>
                <div>
                    <div>
                        <input type='radio' id='hot' value='hot' className="radio__input"/>
                        <label className="form__label radio__label">Hot</label>
                    </div>
                    <div>
                        <input type='radio' id='warm' value='warm' className="radio__input"/>
                        <label className="form__label radio__label">Warm</label>
                    </div>
                    <div>
                        <input type='radio' id='cold' value='cold' className="radio__input"/>
                        <label className="form__label radio__label">Cold</label>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Form