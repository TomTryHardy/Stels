'use strict';

window.addEventListener('DOMContentLoaded', () => {

    
    const tab = document.querySelectorAll('.tabs__item'),
      tabsParent = document.querySelector('.tabs'),
      tabContent = document.querySelectorAll('.block'),
      first = document.querySelector('.first'),
      second = document.querySelector('.second'),
      wrapper = document.querySelector('.bike__wrapper'),
      errorMsgOl = document.querySelector('.color__error_ol'),
      errorMsgUl = document.querySelector('.color__error_ul'),
      okBtn = document.querySelectorAll('.btn__ok'),
      cancelBtn = document.querySelectorAll('.btn__cancel'),
      addBtn = document.querySelectorAll('.btn__add');

    let listParent = document.querySelectorAll('.lower__list'),
        listParentOl = document.querySelector('.olList'),
        listParentUl = document.querySelector('.ulList'),
        inputs = document.querySelectorAll('.color__input'),
        inputOl = document.querySelector('.input__ol'),
        inputUl = document.querySelector('.input__ul'),
        inputParent = document.querySelectorAll('.color'),
        bodyWidth = document.body.offsetWidth;


    function switchSlides () {
        tab.forEach(item => {
            item.addEventListener('click', () => {
                let tabIndex = item.getAttribute('data-tabs');
                let currentTab = document.querySelector(tabIndex);

                if (!item.classList.contains('tabs__item-active')) {
                    tab.forEach(item => {
                        item.classList.remove('tabs__item-active');
                    });
                    tabContent.forEach(item => {
                        item.classList.remove('block__active');
                    });
                    item.classList.add('tabs__item-active');
                    currentTab.classList.add('block__active');
                }
            });
        });
    }
    //нужно обязательно назначать классы активности табам и их через класс активности проверять.
    if (bodyWidth > 576) {
        switchSlides();
    }


    // function mobileBlock (active, hide) {
    //     tab.forEach(item => {
    //         item.addEventListener('click', (event) => { 
    //             let target = event.target;
    //             let tabIndex = item.getAttribute('data-tabs');
    //             let currentTab = document.querySelector(tabIndex);
    //             if (!target.classList.contains('tabs__item-active')) {
    //                 target.classList.add('tabs__item-active');
    //                 currentTab.classList.remove(hide);
    //                 currentTab.classList.add(active);
    //             } else {   
    //                 target.classList.remove('tabs__item-active');  
    //                 currentTab.classList.remove(active);
    //                 currentTab.classList.add(hide);
    //             }

    //             if (tabContent[0].classList.contains(active)) {
    //                 tab[1].style.transform = `translateY(${tabContent[0].offsetHeight})`;  
    //             }
    //             // item.classList.add('tabs__item-active');  
    //             // currentTab.classList.add(active);
    //         });
    //     });
    // }

    if (bodyWidth < 560) {

        const mobileTab = document.querySelectorAll('.mobile__tab');
        tab.forEach(item => {
            item.style.display = 'none';
        })
        mobileTab.forEach(cur => {
            cur.style.display = 'block';
            cur.classList.add('tabs__item');
            cur.addEventListener ('click', () => {
                if (cur.classList.contains('tabs__item-active')) {
                    cur.classList.remove('tabs__item-active');
                    cur.style.borderRadius = '20px 20px 20px 20px'
                } else {
                    cur.classList.add('tabs__item-active');
                    cur.style.borderRadius = '20px 20px 0px 0px'
                }
                chooseTab('tabs__item-active');
            })
        })
        function chooseTab (active) {
            mobileTab.forEach((item, i=0) => {
                if (item.classList.contains(active)) {
                    tabContent[i].classList.remove('mobile__block-hide')
                    tabContent[i].classList.add('mobile__block-active')
                } else {
                    tabContent[i].classList.remove('mobile__block-active')
                    tabContent[i].classList.add('mobile__block-hide')
                }
            })
            
            
        }
        mobileTab[0].classList.add('tabs__item-active');
        tabContent[1].classList.add('mobile__block-hide');
        mobileTab[1].style.borderRadius = '20px 20px 20px 20px'

        


        

        
    }

    function addCharacteristic () {
        addBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let target = e.target;
                if (inputOl.value == '' || inputOl.value.length < 5 || +inputOl.value || inputOl.value.length > 30) {
                    if (target.classList.contains('btnOl')) {
                        inputOl.style.border = '1px solid red';
                        errorMsgOl.style.display = 'block';
                    }
                } else {
                    if (target.classList.contains('btnOl')){ 
                        let listItem = document.createElement('li');
                        listItem.classList.add('lower__item', 'ol');
                        listItem.innerHTML = inputOl.value;
                        listParentOl.append(listItem);
                        inputOl.style.border = '1px solid #D9D9D9';
                        errorMsgOl.style.display = 'none';
                        inputOl.value='';
                    }  
                } 
                if (inputUl.value == '' || inputUl.value.length < 5 || +inputUl.value || inputUl.value.length > 30) {
                    if (target.classList.contains('btnUl')) {
                        inputUl.style.border = '1px solid red';
                        errorMsgUl.style.display = 'block';
                    }
                } else {
                    if (target.classList.contains('btnUl')) {
                        let listItem = document.createElement('li');
                        listItem.classList.add('lower__item', 'ul');
                        listItem.innerHTML = inputUl.value;
                        listParentUl.append(listItem);   
                        inputUl.style.border = '1px solid #D9D9D9';
                        errorMsgUl.style.display = 'none';
                        inputUl.value='';
                    } 
                }        
            });
        });
    }

    addCharacteristic();


    function btnOk () {
        okBtn.forEach(button => {
            button.addEventListener('click', () => {
                let thanks = document.querySelector('.thanks');
                thanks.style.display = 'block';
                wrapper.style.opacity = '0.5';
                setTimeout(function () {
                    location.reload();
                }, 1500);
                window.scrollTo(1000, 0);
            });
        });
    }

    function btnCancel () {
        cancelBtn.forEach(button => {
            button.addEventListener('click', () => {
                let canceled = document.querySelector('.canceled');
                canceled.style.display = 'block';
                wrapper.style.opacity = '0.5';
                setTimeout(function () {
                    return location.reload();
                }, 1500);
                window.scrollTo(1000, 0);
            });
        });
    }
    btnOk();
    btnCancel();

})
