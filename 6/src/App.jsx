import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
function Factorial({number}){
  function factorial(n){
    return n <= 0 ? 1 : n * factorial(n - 1)
  }
  return <div>{`Factorial of ${number} is ${factorial(number)}`}</div>
}
function LanguageSwitcher(){
  const {t, i18n} = useTranslation()
  function cls(lang){
    return i18n.language === lang ? "btn btn-primary" : "btn btn-outline-primary"
  }
  return (
    <div className="btn-group mb-3" role="group">
      <button data-testid="en" className={cls("en")} onClick={(e) => i18n.changeLanguage(e.target.dataset.testid)}>
        {t("languages.en")}
      </button>
      <button data-testid="ru" className={cls("ru")} onClick={(e) => i18n.changeLanguage(e.target.dataset.testid)}>
        {t("languages.ru")}
      </button>
    </div>
  )
}
function FactorialButtons({onSelect}){
  const {t} = useTranslation()
  return(
    <div className="btn-group mb-3" role="group">
      {[1, 5, 10, 20].map((num) => (
        <button key={num} type="button" className="btn btn-outline-primary" onClick={() => onSelect(num)}>
          {`${t("factorial")} ${num}`}
        </button>
      ))}
    </div>
  )
}
function App(){
  const [val, setVal] = useState(0)
  return (
    <div>
      <LanguageSwitcher />
      <br />
      <FactorialButtons onSelect={setVal} />
      <Factorial number={val} />
    </div>
  )
}
// END

export default App;
