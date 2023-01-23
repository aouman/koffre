/**
 * 
 * all modal funtion
 * 
 * */
  const modalBtns = document.querySelectorAll(".modal-open");

  modalBtns.forEach(function(btn) {
      btn.onclick= function() {
        let modal = btn.getAttribute("data-modal");

        document.getElementById(modal).classList.add('model-open');
      };
    });

  const closeBtns = document.querySelectorAll(".close-btn");
  const closeShowBtn = document.querySelectorAll(".update")

  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.closest(".custom-model-main").classList.remove("model-open");
    };
  });

closeShowBtn.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".custom-model-main").classList.remove("model-open");
  };
});

$(".update_tasks").on('click', function () {
  $(".showsTasks_update").addClass('model-open');
  $(".showsTasks").removeClass('model-open');
});
$(".update_team").on('click', function () {
  $(".updateTeams").addClass('model-open');
  $(".showTeam").removeClass('model-open');
});
$(".close-btn").click(function () {
  $(".updateTeams").removeClass('model-open');
});

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
 * CHAT TASKS
 * 
 * */

$(function () {
  $("#chatTask__form").on("submit", function (e) {
    e.preventDefault();
    var message = $("#text-message").val();
    $("#text-message").val("");
    var date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    $(".chatTask__wrapper").append(
      '<div class="chatTask__message chatTask__message-own"><div class="date">' +
      date +
      "</div><div>" +
      message +
      "</div></div>"
    );
  });
});

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

/**
 * 
 * back page
 */

// This app is sandboxed within CodePen so the referrer is always CodePen. Will work as expected when used independently.

// **Caveat** browsers will not send referrer if going to an http link from https.

$.fn.backButton = function () {
  if (document.referrer !== "") {
    $(this).show();
    $(this).on('click', function (e) {
      e.preventDefault();
      window.location.href = document.referrer;
    });
  }
}

$('.back-button').backButton();



jQuery(function() {
  jQuery('.multiSelect').each(function(e) {
    var self = jQuery(this);
    var field = self.find('.multiSelect_field');
    var fieldOption = field.find('option');
    var placeholder = field.attr('data-placeholder');

    field.hide().after(`<div class="multiSelect_dropdown"></div>
                        <span class="multiSelect_placeholder">` + placeholder + `</span>
                        <ul class="multiSelect_list"></ul>
                        <span class="multiSelect_arrow"></span>`);
    
    fieldOption.each(function(e) {
      jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                            <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                          </li>`);
    });
    
    var dropdown = self.find('.multiSelect_dropdown');
    var list = self.find('.multiSelect_list');
    var option = self.find('.multiSelect_option');
    var optionText = self.find('.multiSelect_text');
    
    dropdown.attr('data-multiple', 'true');
    list.css('top', dropdown.height() + 5);
    
    option.click(function(e) {
      var self = jQuery(this);
			e.stopPropagation();
	    self.addClass('-selected');
	    field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
      dropdown.append(function(e) {
        return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function(e) {
          var self = jQuery(this);
          e.stopPropagation();
          self.remove();
          list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
          list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
          field.find('option:contains(' + self.text() + ')').prop('selected', false);
          if (dropdown.children(':visible').length === 0) {
            dropdown.removeClass('-hasValue');
          }
        });
      }).addClass('-hasValue');
	    list.css('top', dropdown.height() + 5);
	    if (!option.not('.-selected').length) {
	      list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
	    }
    });
    
    dropdown.click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      dropdown.toggleClass('-open');
      list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
    });
    
    jQuery(document).on('click touch', function(e) {
        if (dropdown.hasClass('-open')) {
            dropdown.toggleClass('-open');
            list.removeClass('-open');
        }
    });
  });
});