import { JsonResponse } from "./JsonResponse"

/**
 * A successful response that sends an array of elements as the response body.
 *
 * @template E Type of elements in the collection.
 */
export class CollectionResponse<E> extends JsonResponse {
  /**
   * Creates a new response carrying an array of elements.
   *
   * @example
   * // The following response:
   * const response = new CollectionResponse([
   *  new Employee('Bob'),
   *  new Employee('Jane')
   * ])
   *
   * //produces the following output:
   * [
   *   { "name": "Bob" },
   *   { "name": "Jane" }
   * ]
   *
   * @param elements Elements of the collection that should be exposed in the response.
   */
  constructor(private readonly elements: ReadonlyArray<E>) {
    super(200)
  }

  protected get jsonBody(): ReadonlyArray<E> {
    return this.elements
  }
}
