<script>

    let submitStatus;
      const submitForm = async (data) => {
        submitStatus = "submitting";
        const formData = new FormData(data.currentTarget);
        const res = await fetch("contact.json", {
          method: "POST",
          body: formData,
        });
        const { message } = await res.json();
        submitStatus = message;
      };
    </script>
    
    {#if submitStatus == "submitting"}
      <p>Submitting...</p>
    {:else if submitStatus == "failed"}
      <p class="cly">Form submission failed</p>
    {:else if submitStatus == "success"}
      <p class="cly">Form submission successful</p>
    {:else}
    
    <div class="cla">
    <form on:submit|preventDefault="{submitForm}">
        <div class="class">
            <label for="">
                Name:
                <input type ="text" name="name">
    
            </label>
        </div>
        <div class="cl">
        <label for="">
            Email:
            <input type ="email" name="email">
     </label>
    </div>
    <div class="cos">
      <label for="">
          Age:
          <input type ="text" name="age">

      </label>
  </div>
 
<div class="cc">
  <label for="">
    Mobile No:
      <input type ="text" name="number">

  </label>
</div>
    <div class="clas">
        <input type="submit">
        
    </div>
    </form>
    </div>
    {/if}
    
    
    <style>
        div{
            
            margin-bottom:20px;
            
            }
        .class{
            padding-top:80px;
            margin-left:4rem;
          
        }
        .cl{
            margin-left:4rem;
            
    
        }
        .cos{
            margin-left:4rem;
            
    
        }
        
        .cc{
            margin-left:4rem;
            
    
        }
        .clas{
            margin-left:10rem;
           
        }
        .cla{
            margin-top:20px;
            background-color:bisque;
            width:350px;
            height:370px;
            margin-left:40rem;
            border-radius:25px;
            
            
        }
        input{
            border-radius:5px;
    
        }
        .cly{
          text-align:center;
          font-size:30px;
        }
       
        
    </style>
