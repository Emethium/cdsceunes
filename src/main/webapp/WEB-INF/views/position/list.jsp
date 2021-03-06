<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
<title><spring:message code="position.list.title" /></title>
</head>
<body>
	${sucess}
	<spring:hasBindErrors name="position">
		<ul>
			<c:forEach var="error" items="${errors.allErrors }">
				<li>${error.code }-${error.field}</li>
			</c:forEach>
		</ul>
	</spring:hasBindErrors>
	<table>
		<tr>
			<td><spring:message code="position.list.name" /></td>
			<td><spring:message code="position.list.minWorkLoad" /></td>
			<td><spring:message code="position.list.maxWorkLoad" /></td>
			<td><spring:message code="position.list.commission" /></td>
		</tr>
		<c:forEach items="${positions}" var="position">
			<tr>
				<td>${position.name}</td>
				<td>${position.minWorkload}</td>
				<td>${position.maxWorkload}</td>
				<td>${position.commission.name}</td>
			</tr>
		</c:forEach>
	</table>
	<footer>
		<a href="${spring:mvcUrl("addPosition").build()}"> <spring:message
				code="position.list.footer" /></a>
	</footer>
</body>
</html>
