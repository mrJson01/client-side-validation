
		function FormV(form){

			const inputs = form.querySelectorAll('input');

			for(item of inputs)
			{
				//TEXT
				if(item.getAttribute('type')=='text')
				{
					item.addEventListener('focusout',validation_text,false);
					item.setAttribute('data-flag',false);
				}
				//EMAIL
				if(item.getAttribute('type')=='email')
				{
					item.addEventListener('focusout',validation_email,false);
					item.setAttribute('data-flag',false);
				}
				//PASSWORD
				if(item.getAttribute('type')=='password')
				{
					item.addEventListener('focusout',validation_password,false);
					item.setAttribute('data-flag',false);
				}

			}

			//SUBMIT
			form.addEventListener('submit',submit_form,false);


			// FEEDBACK FUNCTION 
			function feedback(type,input,feed){

				let parent = input.parentElement;

				let feedback = (parent.querySelector('small')!=null) ? parent.querySelector('small') : document.createElement('small'); 

				parent.append(feedback);

				if(type)
				{
					feedback.classList.add('valid');
					feedback.classList.remove('invalid');
					feedback.innerText = feed;

				}
				else
				{
					feedback.classList.add('invalid');
					feedback.classList.remove('valid');
					feedback.innerText = feed;
				}

				input.setAttribute('data-flag',type);

				// CHANGE COLOR OF THE SUBMIT BUTTON
				change(form);

			}

			// TEXT VALIDATION FUNCTION
			function validation_text(e){
				let input = e.target;
				let value = input.value;
				let min = ((input.getAttribute('minlength')!=null)&&(input.getAttribute('minlength')!="")) ? input.getAttribute('minlength') : 8;

				let max = ((input.getAttribute('maxlength')!=null)&&(input.getAttribute('maxlength')!="")) ? input.getAttribute('maxlength') : 15;


				let pattern = new RegExp(`^[A-Za-z]{${min},${max}}$`,'g');


				if(pattern.test(value))feedback(true,input,"Username has the right form");
				else feedback(false,input,`Username can contain only small and big letters in ammount from ${min} to ${max}`); 

			}

			// EMAIL VALIDATION FUNCTION
			function validation_email(e){
				let input = e.target;
				let value = input.value;

				
		// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

				if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))feedback(true,input,'Given E-mail is valid');
				else feedback(false,input,'Given E-mail is invalid');
			}

			// PASSWORD
			function validation_password(e){
				let input = e.target;
				let value = input.value


				if((value.length>=8)&&(value.length<=20))
				{

					if((value.match(/[A-Z]+/g))&&(value.match(/[a-z]+/g))&&(value.match(/[0-9]+/g)))feedback(true,input,'Given password is acceptable');
					else feedback(false,input,"Password needs to contains at least one big letter, one small letter and one number ");

				}
				else feedback(false,input,'Password must contains from 8 to 20 letter');




			}

			// SUBMIT
			function submit_form(e){
				e.preventDefault();

				if(checking_data_flag(e.target))
				{
					e.target.submit();
				}

				// e.target.submit();
			}

			// SUBMIT BUTTON DYNAMIC-CHANGE

			function change(event_form){

				let submit_btn =event_form.querySelector('input[type=submit]');

				console.log(event_form);

				if(checking_data_flag(event_form))submit_btn.style.backgroundColor='#44bd32';
				else submit_btn.style.backgroundColor="#e84118";
			}

			// CHECKING IF ALL INPUTS WITH DATA-FLAG EQUAL TRUE
			function checking_data_flag(form){

				let inputs = form.querySelectorAll('input[data-flag]');
				let flag = true;
				inputs.forEach((item,ind,array)=>{
					if(item.getAttribute('data-flag')=='false')flag = false;
				});

				return flag;

			}


		}
