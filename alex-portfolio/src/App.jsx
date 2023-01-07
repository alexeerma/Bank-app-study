import styles from './style';

const App = () => {
  return (
    <div class="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          NavBar
        </div>
      </div>
    </div>
  );
}

export default App