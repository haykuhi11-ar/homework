#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct HiddenClass {
    char **keys;
    int *offsets;
    int keyCount;
}HiddenClass;

typedef struct JSObject {
HiddenClass *shape;
char **slots;
} JSObject;

HiddenClass *createHiddenClass(int keyCount);
JSObject *createObj(HiddenClass *shape);  

int main() {
    HiddenClass *person = createHiddenClass(2);
    person -> keys[0] = "name";
    person -> keys[1] = "age";
    person -> offsets[0] = 0;
    person -> offsets[1] = 1;

    JSObject *person_obj = createObj(person);
    person_obj -> slots[person -> offsets[0]] = "Annet";
    person_obj -> slots[person -> offsets[1]] = "40";

    printf("%s: %s\n", person -> keys[0], person_obj -> slots[person -> offsets[0]]);
    printf("%s: %s\n", person -> keys[1], person_obj -> slots[person -> offsets[1]]);

    free(person_obj -> slots);
    free(person -> keys);
    free(person -> offsets);
    free(person_obj);
    free(person);
    return 0;

}
HiddenClass *createHiddenClass(int keyCount) {
    HiddenClass *hc_p = malloc(sizeof(HiddenClass));
    hc_p -> keys = malloc(sizeof(char*) * keyCount);
    hc_p -> offsets = malloc(sizeof(int) * keyCount);
    hc_p -> keyCount = keyCount;
    return hc_p;
}
JSObject *createObj(HiddenClass *shape) {
    JSObject *js_ob_p = malloc(sizeof(JSObject));
    js_ob_p -> shape = shape;
    js_ob_p -> slots = malloc(sizeof(char*) * shape -> keyCount);
    return js_ob_p;
}