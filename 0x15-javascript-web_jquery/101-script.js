const MyList = $('UL.my_list');
const AddItem = $('DIV#add_item');
const RemoveItem = $('DIV#remove_item');
const ClearList = $('DIV#clear_list');

AddItem.click(function () {
  MyList.append('<li>Item</li>');
});

RemoveItem.click(function () {
  MyList.children().last().remove();
});

ClearList.click(function () {
  MyList.empty();
});
