function make_breadcrumb() {
  var url = "{{ page.url }}";
  var url_components = url.split("/");

  var names = "{{ page.breadcrumb_names }}";
  var name_list = names.split("/");

  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);


}
