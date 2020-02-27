package edu.umgc.swen670;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("edu.umgc.swen670");

        noClasses()
            .that()
                .resideInAnyPackage("edu.umgc.swen670.service..")
            .or()
                .resideInAnyPackage("edu.umgc.swen670.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..edu.umgc.swen670.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
