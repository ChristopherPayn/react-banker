import styles from './styles/SwitchToggle.module.css';

export const SwitchToggle = ({ handleOnChange, isChecked, switchName, switchLabel }) => {
    return (
        <>
            {switchLabel &&
                <label htmlFor={`switch-toggle-${switchName}`}>{switchLabel}</label>}
            <label className={styles.switch} style={{ marginLeft: '1em', marginRight: '1em'}}>
                <input
                    name={`switch-toggle-${switchName}`}
                    id={`switch-toggle-${switchName}`}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                />
                {/* <span class="slider round"></span> */}
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </>
    );
};
