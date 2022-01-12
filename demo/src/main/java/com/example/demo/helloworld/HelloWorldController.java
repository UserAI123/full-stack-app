package com.example.demo.helloworld;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	@RequestMapping(method=RequestMethod.GET,path="/hello-world")
	public String helloWorld()
	{
		return "Hello World";
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean()
	{
		//throw new RuntimeException("some error message in the log");
		return new HelloWorldBean("This is hello world bean now got changed");
	}
	@GetMapping(path="/hello-world-bean/path-variable/{name}")
	public HelloWorldBean helloWorldBean(@PathVariable String name)
	{
		return new HelloWorldBean(String.format("This is hello world bean,%s",name));
	}
}
