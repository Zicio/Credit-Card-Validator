(()=>{"use strict";class e{constructor(e){if(!e)throw new Error("Элемент не существует");this.number=e}check(){return this.number.match(/^4/)?"card__visa":this.number.match(/^5[1-5]/)?"card__master":this.number.match(/^3[47]/)?"card__amex":this.number.match(/^2/)?"card__mir":this.number.match(/^35([2-8]?[0-9]?)/)?"card__jcb":null}}class t{constructor(e){this.number=Array.from(e,Number)}first(){if((this.number.length-1)%2)for(let e=0;e<this.number.length;e+=2)this.number[e]*=2,this.number[e]>9&&(this.number[e]-=9);else for(let e=1;e<this.number.length;e+=2)this.number[e]*=2,this.number[e]>9&&(this.number[e]-=9)}second(){this.first();const e=this.number.reduce(((e,t)=>e+t),0);return 0!==e&&!(e%10)}}new class{constructor(e){if(!e)throw new Error("Элемент не существует");this.element=e,this.input=this.element.querySelector(".check__field"),this.button=this.element.querySelector(".check__button"),this.card=this.element.querySelectorAll(".card"),this.success=this.element.querySelector(".success"),this.failure=this.element.querySelector(".failure"),this.listenerofInput(),this.listenerofButton()}listenerofInput(){this.input.addEventListener("input",this.systemSelection.bind(this))}listenerofButton(){this.button.addEventListener("click",this.validation.bind(this))}systemSelection(){if(!this.input.value){for(const e of this.card)e.classList.remove("card-inactive");return}this.success.classList.remove("success-active"),this.failure.classList.remove("failure-active");const t=new e(this.input.value);if(null!==t.check()){for(const e of this.card)e.classList.add("card-inactive");this.element.querySelector(`.${t.check()}`).classList.remove("card-inactive")}}validation(e){e.preventDefault(),new t(this.input.value).second()?this.success.classList.add("success-active"):this.failure.classList.add("failure-active")}}(document.body)})();