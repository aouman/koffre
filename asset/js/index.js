/*const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active_proj')
        })
        tab.classList.add('active_proj')
        target.classList.add('active')
    })
})*/

/*****
 * 
 * checkbox avec la progresse bar
 * 
 * **** */

// CHECKBOX LIST WITH PROGRESS BAR AND LOCAL STORAGE
let checkboxinputs = document.querySelectorAll(".checklist-progressbar input[type='checkbox']");
let progressbar = document.querySelector('.checklist-progressbar .progressbar-inner');
let progressbarvalue = document.querySelector('.checklist-progressbar .progressbar-value');
let progresspercentageNum = 0;
let progresspercentage = "0%";

// add event listener to detect checkbox changes
for (let i = 0, len = checkboxinputs.length; i < len; i++) {

    // if checkbox has an id, initialize local storage for all with key = id
    let box = checkboxinputs[i];
    if (box.hasAttribute("id")) {
        setupLocalStorage(box);
    }

    // on click event listener
    checkboxinputs[i].addEventListener('click', function (e) {
        checkNumberofChecked();
        updateProgressbar();
    });
};

// CALCULATE TOTAL NUMBER OF CHECKED BOXES
function checkNumberofChecked() {
    let checkedboxes = 0;
    for (let i = 0, len = checkboxinputs.length; i < len; i++) {
        if (checkboxinputs[i].checked) {
            checkedboxes++;
        };
    };
    progresspercentageNum = ((checkedboxes / checkboxinputs.length) * 100);
    progresspercentage = ((checkedboxes / checkboxinputs.length) * 100) + "%";
};

// UPDATE THE PROGRESS BAR
function updateProgressbar() {
    if (progresspercentageNum < 100) {
        progressbar.style.backgroundColor = "red";
    }
    else {
        progressbar.style.backgroundColor = "green";
    };
    progressbar.style.width = progresspercentage;
    progressbarvalue.innerHTML = Math.round(progresspercentageNum) + "%";
};

// SETUP LOCAL STORAGE
function setupLocalStorage(box) {
    let storageId = box.getAttribute("id");
    let oldVal = localStorage.getItem(storageId);

    // initial sync with local storage
    if (oldVal == "true") {
        box.checked = true;
    } else {
        box.checked = false;
    };

    box.addEventListener("change", function () {
        localStorage.setItem(storageId, this.checked);
    });

};

// INIT PROGRESS BAR 
checkNumberofChecked();
updateProgressbar();

/**
 * 
 * CLICK TO DOWLOARD
 */

function download() {
  let file = new Blob(['Hello, I am downloaded'], {type: 'text/plain'});
  let fileRoute = window.URL.createObjectURL(file);
  let a = document.createElement('a');
  a.setAttribute('href', fileRoute);
  a.setAttribute('download', 'element_telecharger.txt');
  document.getElementById('download__join').appendChild(a);
  a.click();
  document.getElementById('download__join').removeChild(a); 
};

document.getElementById('download').addEventListener('click', download);


/**
 * 
 * ADD INPUT FOR TASKS
 * 
 * 
 */

$(document).ready(function () {
    $("#addmore").click(function () {
        $("#req_input").append(
            '<div class="required_inp"><input id="addTaskCheck" name="fname" placeholder="Taches" type="text">' +
            '<button class="inputRemove"><ion-icon name="close-outline"></ion-icon></button></div>'
        );
    });
    $('body').on('click', '.inputRemove', function () {
        $(this).parent('div.required_inp').remove()
    });

    $("#addmoreEdit").click(function () {
        $("#req_inputEdit").append(
            '<div class="required_inp"><input id="addTaskCheckEdit" name="fname" placeholder="Taches" type="text">' +
            '<button class="inputRemove"><ion-icon name="close-outline"></ion-icon></button></div>'
        );
    });
    $('body').on('click', '.inputRemove', function () {
        $(this).parent('div.required_inp').remove()
    });
});

/**
 * 
 * APLOADER LES PIECES JOINTES
 * 
 */

$(document).ready(function () {
    // ------------  File upload BEGIN ------------
    $("#customFile").on("change", function (event) {
        var files = event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $(
                "<div class='file__value'><div class='file__value--text'>" +
                file.name +
                "</div><div class='file__value--remove' data-id='" +
                file.name +
                "' ></div></div>"
            ).insertAfter("#file__input");
        }
    });

    //Click to remove item
    $("body").on("click", ".file__value", function () {
        $(this).remove();
    });
    // ------------ File upload END ------------
});

$(document).ready(function () {
    // ------------  File upload BEGIN ------------
    $("#customFileEdit").on("change", function (event) {
        var files = event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $(
                "<div class='file__value'><div class='file__value--text'>" +
                file.name +
                "</div><div class='file__value--remove' data-id='" +
                file.name +
                "' ></div></div>"
            ).insertAfter("#file__inputEdit");
        }
    });

    //Click to remove item
    $("body").on("click", ".file__value", function () {
        $(this).remove();
    });
    // ------------ File upload END ------------
});

/**
 * 
 * 
 * NEW COLONNE FOR TASK
 * 
 */

$(document).ready(function () {
    $(".add_tasks p").click(function () {
        $(".proj_228_content").append(
            '<div class="proj_228">' +
            '<div class="proj_head">' +
            '<div class="proj_head_65f">' +
            '<div class="proj_head_3t">' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '</div>' +
            '<p>A faire <span>2</span> </p>' +
            '</div>' +
            '<p class="addTasks modal-open" data-modal="projet_task">+ Tache </p>' +
            '</div>' +
            '</div>'
        );
    });
    $('body').on('click', '.inputRemove', function () {
        $(this).parent('div.required_inp').remove()
    });

});
