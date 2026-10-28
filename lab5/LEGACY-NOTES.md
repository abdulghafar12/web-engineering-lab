# Task 2: Legacy Code Notes
jQuery call	Native JavaScript equivalent
$(document).ready(fn)	          document.addEventListener("DOMContentLoaded", fn)
$("#name").val()	              document.querySelector("#name").value
.after(html)	                  element.after(newElement)
$(".error").remove()	          document.querySelectorAll(".error").forEach(el => el.remove())
.text(...).hide().fadeIn(400)	  status.textContent = "Your message"
$form[0].reset()	              form.reset()

## Three Legacy Code Smells

Old coding habit            	    Modern alternative
Using var for variables      	    Use const or let
Using $.trim()	Use .trim()
Building HTML with strings      	Use document.createElement() and textContent
## Task 6 – TypeScript Errors

1. A querySelector result might be null, so TypeScript does not allow using it without checking.
2. Function parameters have no explicit types, so TypeScript reports implicit any errors.

