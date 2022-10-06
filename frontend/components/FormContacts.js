import anime from 'animejs';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeFormContact } from '../redux/reducers/HeaderSlice';
import styles from './styles/FormContacts.module.sass';

function FormContacts() {
    const text = useSelector(state => state.language.text);
    const dispatch = useDispatch()
    const formFon = useRef();
    const logotype = useRef();
    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
        agree: false,
    });

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    function submitData(event) {
        console.log(inputField);
        console.log(inputField.name);
        console.log(inputField.email);
        console.log(inputField.phone);
        console.log(inputField.comment);
        event.preventDefault();
    }
    function InputItems(props) {
        const data = props.data;
        const inputsValue = [inputField.name, inputField.email, inputField.phone];
        return data.map((value, index) => {

            if(value.name === 'comment') {
                return(
                    <div
                    className={styles.inputItems}
                    key={index}
                >
                    <textarea type={value.type} value={inputField.comment} onChange={inputsHandler} required name={'comment'} placeholder={value.placeholder}/>
                    <span>{value.text}</span>
                </div>
                )
            }
            return(
                <div
                    className={styles.inputItems}
                    key={index}
                >
                    <input type={value.type} value={inputsValue[index]} onChange={inputsHandler} required name={value.name} placeholder={value.placeholder}/>
                    <span>{value.text}</span>
                </div>
            )
        });
    }
    return(
        <div 
            className={styles.formFon}
            ref={formFon}
            style={{
                transform: 'translateX(100vw)'
            }}
        >   
            <div
                className={styles.btnClose}
                onClick={() => {
                    dispatch(
                        closeFormContact()
                    )
                }}
            >
                {text.formContact.btnClose}
            </div>
            <div 
                className={styles.logotype}
                ref={logotype}
            >
                <h1>UNIGI</h1>
            </div>
            <div
                className={styles.formContact}
                style={{
                    transform: 'translateY(150px)'
                }}
            >
                <div className={styles.caption}>
                    {text.formContact.caption}
                </div>
                <form>
                    {/* <InputItems data={text.formContact.inputItems}/> */}
                    <div
                        className={styles.inputItems}
                    >
                        <input 
                            type='text' 
                            value={inputField.name} 
                            onChange={inputsHandler} 
                            required 
                            name='name'
                            placeholder={text.formContact.inputItems[0].placeholder}
                        />
                        <span>{text.formContact.inputItems[0].text}</span>
                    </div>
                    <div
                        className={styles.inputItems}
                    >
                        <input 
                            type='email' 
                            value={inputField.email} 
                            name='email' 
                            onChange={inputsHandler} 
                            required 
                            placeholder={text.formContact.inputItems[1].placeholder}
                        />
                        <span>{text.formContact.inputItems[1].text}</span>
                    </div>
                    <div
                        className={styles.inputItems}
                    >
                        <input 
                            type='number' 
                            value={inputField.phone} 
                            name='phone' 
                            onChange={inputsHandler} 
                            required 
                            placeholder={text.formContact.inputItems[2].placeholder}
                        />
                        <span>{text.formContact.inputItems[2].text}</span>
                    </div>
                    <div
                        className={styles.inputItems}
                    >
                    <textarea 
                        type='text' 
                        value={inputField.comment} 
                        onChange={inputsHandler} 
                        required 
                        name='comment'
                        placeholder={text.formContact.inputItems[3].placeholder}/>
                    <span>{text.formContact.inputItems[3].text}</span>
                    </div>


                    <div className={styles.btns}>
                        <button 
                            className={styles.btnSubmit}
                            onClick={submitData}
                        >{text.formContact.btnSubmit}</button>
                        <div className={styles.btnAgree}>
                            <input 
                                type='checkbox'
                                id='agree'
                                name='agree'
                                onChange={inputsHandler}
                                value={inputField.agree} 
                                required
                            />
                            <Link 
                                href="/privacyPolicy"
                            >
                                <label 
                                    htmlFor='agree'
                                    onClick={ () => {
                                        dispatch(
                                            closeFormContact()   
                                        )
                                    }
                                    }
                                >{text.formContact.labelAgree}</label>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )    
};

export default FormContacts;