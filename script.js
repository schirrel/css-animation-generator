  const generate = (code, animationName, duration='5s', count ='1') => {
  let sampleDeclaration = `
.${animationName}{
 -webkit-animation: ${animationName} ${duration} ${count}; /* Safari 4+ */
  -moz-animation:    ${animationName} ${duration} ${count}; /* Fx 5+ */
  -o-animation:      ${animationName} ${duration} ${count}; /* Opera 12+ */
  animation:         ${animationName} ${duration} ${count}; /* IE 10+, Fx 29+ */
}`;
  let sampleAnimation = `
@-webkit-keyframes ${animationName} {
 ${code}
}
@-moz-keyframes ${animationName} {
 ${code}
}
@-o-keyframes ${animationName} {
 ${code}
}
@keyframes ${animationName} {
  ${code}
}
`;
    result.innerHTML = sampleDeclaration + ' <br/> ' +  sampleAnimation;
}
  
