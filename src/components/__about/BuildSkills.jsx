// Default Function
export default function BuildSkills({ skills }) {
  return (
    <div className="terminal rounded-md glass w-full h-fit p-4 break-words">
      <div className="command">&gt; class Myskills():</div>
      <div className="output">&nbsp;&nbsp;&nbsp;&nbsp;Instances:</div>
      <div className="comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Initializing skills</div>
      <div className="command">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self):</div>
      { skills.map(skill=>(
        <div className="output" key={skill.id}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.__{skill.name} = "{skill.level}"</div>
      ))}
      <div className="comment"># Main function to print skills</div>
      <div className="command">&gt;def main(self):</div>
      <div className="output">&nbsp;&nbsp;&nbsp;&nbsp;print("Skills:")</div>
      <div className="output">&nbsp;&nbsp;&nbsp;&nbsp;for skill, level in self.__dict__.items():</div>
      <div className="output">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(skill.capitalize(), level)</div>
      <div className="comment"># Create an instance and call main function</div>
      <div className="command">my_skills = Myskills()</div>
      <div className="command">my_skills.main()</div>
    </div>
  )
}