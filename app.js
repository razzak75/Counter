const fiver_form=  document. getElementById('fiver-form');
const output=  document.querySelector('.output');




fiver_form.onsubmit = (e) => {
    e.preventDefault()
    

    // get form value

    const form_data = new FormData(e.target);
    const { date, time } = Object.fromEntries(form_data.entries())
    
   
  let count = setInterval(() => {
    // get time stamps

    let startTime  = Date.now()
    let endTime = new Date(date + ' ' + time)
    let orderTime = Math.floor(Math.abs(endTime.getTime() - startTime))

    // get value from time

    let totalSecond = Math.floor(orderTime/1000)
    let totalMinute = Math.floor(totalSecond/60)
    let totalHour = Math.floor(totalMinute/60)
    let totalDay = Math.floor(totalHour/24)

    let hours = totalHour - (totalDay * 24)
    let min = totalMinute - (totalDay*24*60) - (hours*60)
    let sec = totalSecond - (totalDay*24*60*60) - (hours*60*60) - (min*60)

    if (totalSecond <= 0) {
        clearInterval(count)
    }

output.innerHTML = `<h3 class="bg-success rounded text-white text-center py-3"> ${totalDay} dafdsdfdsfys : ${hours} hours : ${min} minutes : ${sec} sec</h1>`  
  }, 1000);  
}
