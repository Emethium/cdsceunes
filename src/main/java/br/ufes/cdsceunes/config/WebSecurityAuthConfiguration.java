package br.ufes.cdsceunes.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityAuthConfiguration extends WebSecurityConfigurerAdapter {

	/*@Autowired
	private UserDetailsRepository users;
	
	@Override
	public void init(AuthenticationManagerBuilder auth) throws Exception {
		//auth.authenticationProvider(provider);
		auth.userDetailsService(userDetailsService());
	}

	@Bean
	public UserDetailsService userDetailsService() {
		return new UserDetailsService() {

			@Override
			public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
				br.ufes.cdsceunes.model.UserDetails details = users.findByLogin(username);				
				String[] roles = details.getRoles().stream().map(e -> e.getName()).collect(Collectors.toList()).toArray(new String[0]);
				return new User(details.getLogin(), details.getPassword(), true, true, true, true,
						AuthorityUtils.createAuthorityList(roles));
			}
		};
	}*/
	@Autowired
	private BCryptPasswordEncoder bcryptEncoder;
	
	@Value("${spring.queries.users-query}")
	private String usersQuery;
	@Value("${spring.queries.roles-query}")
	private String rolesQuery;
	@Autowired
	private DataSource dataSource;
	
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth
			.jdbcAuthentication()
				.usersByUsernameQuery(usersQuery)
				.authoritiesByUsernameQuery(rolesQuery)
				.dataSource(dataSource);
				//.passwordEncoder(bcryptEncoder);
	}
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().and()
			.authorizeRequests()
				.antMatchers("/", "/login").permitAll()
				.anyRequest().authenticated()
				.and()
			.formLogin()
				.loginPage("/")
				.usernameParameter("login")
				.passwordParameter("password")
				.permitAll()
				.defaultSuccessUrl("/app")
				.and()
			.logout()
				.logoutUrl("/logout")
				.logoutSuccessUrl("/")
				.and()
			.exceptionHandling()
				.accessDeniedPage("/denied");
	}
}
