package br.ufes.cdsceunes.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class WebSecurityAuthConfiguration extends GlobalAuthenticationConfigurerAdapter {

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
	
	private String usersQuery;
	private String rolesQuery;
	@Autowired
	private DataSource dataSource;
	private BCryptPasswordEncoder bcryptEncoder;
	
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth
			.jdbcAuthentication()
				.usersByUsernameQuery(usersQuery)
				.authoritiesByUsernameQuery(rolesQuery)
				.dataSource(dataSource)
				.passwordEncoder(bcryptEncoder);
	}
}
