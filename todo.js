let input = document.querySelector('#in');
let btn = document.querySelector('#btn');
let btn3 = document.querySelector('#btn3');
let uul = document.querySelector('ul');
let count = document.querySelector('#last');
let uld = document.querySelector('#uld');
let btn2, lli;
let newli, newbtn, userdata, c = 0;


input.addEventListener('keyup', action);
function action(e) {
    userdata = input.value;
    if (userdata.trim() != '') {
        btn.classList.add('active');
        if (e.key == 'Enter') {
            doit();
        }
    }
    else {
        btn.classList.remove('active');
    }
}

btn.addEventListener('click', doit);

function doit(e) {
    if (userdata != '') {
        newli = document.createElement('li');
        newbtn = `${userdata}<button id=b${c}><i class="fa-solid fa-trash-can"></i></button>`;
        newli.innerHTML = newbtn;
        uul.appendChild(newli);
        let btt = document.querySelector(`#b${c}`);
        btt.addEventListener('click', () => {
            c--;
            btn33();
            count.innerText = `${c} items to do`;
            btt.parentElement.parentElement.removeChild(btt.parentElement);
        });

        c++;
        count.innerText = `${c} items to do`;
        input.value = '';
        btn2 = document.querySelectorAll('li button');
        lli = document.querySelectorAll('li');
        userdata = '';
        btn.classList.remove('active');
        btn33();

    }
}


function btn33() {
    if (c <= 0) {
        btn3.classList.remove('active1');

    }
    else {
        btn3.classList.add('active1');
    }
}

btn3.addEventListener('click', () => {
    c = 0;
    btn33();
    count.innerText = `${c} items to do`;
    uld.removeChild(uul);
    let newul = document.createElement('ul');
    uld.append(newul);
    uul = document.querySelector('ul');
});

