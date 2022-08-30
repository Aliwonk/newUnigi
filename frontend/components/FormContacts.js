import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeFormContact } from '../redux/reducers/HeaderSlice';
import styles from './styles/FormContacts.module.sass';

function FormContacts() {
    const text = useSelector(state => state.language.text);
    const dispatch = useDispatch()
    const formFon = useRef();
    const logotype = useRef();


    function InputItems(props) {
        const data = props.data;

        return data.map((value, index) => {
            return(
                <div
                    className={styles.inputItems}
                    key={index}
                >
                    <label>{value.text}</label>
                    <input name={value.name} />
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
                Закрыть
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
                    Свяжитесь с нами
                </div>
                <form>
                    <InputItems data={text.formContact.inputItems}/>
                </form>
            </div>
        </div>
    )    
};

export default FormContacts;